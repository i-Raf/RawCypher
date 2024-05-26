'use client';

import { createContext, useContext, useState } from 'react';

interface RewardContextValue {
	reward: number;
	setReward: React.Dispatch<React.SetStateAction<number>>;
}

export const RewardContext = createContext<RewardContextValue | undefined>(
	undefined
);

export const RewardProvider = ({ children }: { children: React.ReactNode }) => {
	const [reward, setReward] = useState<number>(0);

	return (
		<RewardContext.Provider value={{ reward, setReward }}>
			{children}
		</RewardContext.Provider>
	);
};

export const useRewardContext = () => {
	const rewardContext = useContext(RewardContext);
	if (rewardContext === undefined) {
		throw new Error('useRewardContext must be inside a RewardProvider');
	}
	return rewardContext;
};
