import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Representative {
  image: string;
  name: string;
  district: number;
  description: string;
}

interface TopRepsContextType {
  topReps: Representative[];
  addTopRep: (rep: Representative) => void;
  removeTopRep: (rep: Representative) => void;
  isRepInTopReps: (rep: Representative) => boolean; // New function to check if rep is in top reps
}

const TopRepsContext = createContext<TopRepsContextType | undefined>(undefined);

export const TopRepsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [topReps, setTopReps] = useState<Representative[]>([]);

  const addTopRep = (rep: Representative) => {
    // Prevent adding duplicate representatives
    setTopReps((prev) => {
      if (!prev.find((r) => r.name === rep.name && r.district === rep.district)) {
        return [...prev, rep];
      }
      return prev;
    });
  };

  const removeTopRep = (rep: Representative) => {
    setTopReps((prev) => prev.filter((r) => r.name !== rep.name || r.district !== rep.district));
  };

  const isRepInTopReps = (rep: Representative) => {
    return topReps.some((r) => r.name === rep.name && r.district === rep.district);
  };

  return (
    <TopRepsContext.Provider value={{ topReps, addTopRep, removeTopRep, isRepInTopReps }}>
      {children}
    </TopRepsContext.Provider>
  );
};

export const useTopReps = () => {
  const context = useContext(TopRepsContext);
  if (!context) {
    throw new Error('useTopReps must be used within a TopRepsProvider');
  }
  return context;
};
