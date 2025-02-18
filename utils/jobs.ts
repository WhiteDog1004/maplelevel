export const getLabelByJobs = (type: string) => {
	const result = JOBS.find((job) => job.name === type);

	return result;
};

export const JOBS = [
	{
		id: 110,
		name: "fighter",
		label: "파이터",
	},
	{
		id: 120,
		name: "page",
		label: "페이지",
	},
	{
		id: 130,
		name: "spearman",
		label: "스피어맨",
	},
	{
		id: 210,
		name: "wizardFire",
		label: "위자드(불독)",
	},
	{
		id: 220,
		name: "wizardIce",
		label: "위자드(썬콜)",
	},
	{
		id: 230,
		name: "cleric",
		label: "클레릭",
	},
	{
		id: 310,
		name: "hunter",
		label: "헌터",
	},
	{
		id: 320,
		name: "crossbowman",
		label: "사수",
	},
	{
		id: 410,
		name: "assassin",
		label: "어쌔신",
	},
	{
		id: 420,
		name: "bandit",
		label: "시프",
	},
	// {
	// 	id: 510,
	// 	name: "brawler",
	// 	label: "인파이터",
	// },
	// {
	// 	id: 520,
	// 	name: "gunslinger",
	// 	label: "건슬링거",
	// },
];
