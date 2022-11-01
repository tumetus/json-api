// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const companies = [
  {
    id: 100,
    name: "Bluechip Tech",
  },
  {
    id: 101,
    name: "Sunrise Software Solutions",
  },
  {
    id: 102,
    name: "Code Insider",
  },
  {
    id: 103,
    name: "HighStreet Code",
  },
  {
    id: 104,
    name: "Kuomo Solutions",
  },
];

const sleep = async (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

export default async function handler(req, res) {
  await sleep(2000);

  res.status(200).json({ companies });
}
