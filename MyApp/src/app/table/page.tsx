'use client';
import React, { useState, useEffect } from 'react';
import { useDataContext } from '@/context/data.context';
import { useRouter } from 'next/navigation';
import isAuth from '@/components/isAuth';
import Loading from '@/components/Loading';

const TablesView: React.FC = () => {
  const { tables, addTable } = useDataContext();
  const [newTableName, setNewTableName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (tables.length >= 0) {
      setIsLoading(false);
    }
  }, [tables]);

  const handleAddTable = async () => {
    setIsLoading(true);
    await addTable(newTableName);
    setNewTableName('');
    setIsLoading(false);
  };

  const handleTableClick = (tableId: string) => {
    router.push(`table/${tableId}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-white mb-4">Your Tables</h1>
        <p className="text-center text-white">Manage your projects efficiently.</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Table</h2>
          <input
            type="text"
            className="border mb-4 p-2 w-full rounded"
            placeholder="Table Name"
            value={newTableName}
            onChange={(e) => setNewTableName(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleAddTable}
          >
            Add Table
          </button>
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-white">Your Tables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tables.map((table) => (
              <div
                key={table.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleTableClick(table.id)}
              >
                <h3 className="text-xl font-bold">{table.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default isAuth(TablesView);
