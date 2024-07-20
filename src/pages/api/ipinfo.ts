// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { publicIpv4 } from "public-ip";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("apiiiiiiiii");
    const ip = await publicIpv4();
    if (!ip) return res.status(500).json({});

    const fetching = await fetch(
      `https://api-bdc.net/data/ip-geolocation?ip=${ip}&localityLanguage=es&key=${process.env.BIG_DATA_CLOUD_API_KEY}`
    );

    const geo = await fetching.json();
    if (!geo) return res.status(500).json({});

    const country = geo.country.name;
    const region = geo.location.principalSubdivision;
    const city = geo.location.city;

    return res.status(200).json({ country, region, city });
  } catch (err) {
    return res.status(500).json({});
  }
}
