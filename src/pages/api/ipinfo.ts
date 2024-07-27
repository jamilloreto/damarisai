import { getPlaces } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    /*
    const ip = requestIp.getClientIp(req);
    if (!ip) return res.status(500).json({});

    const fetching = await fetch(
      `https://api-bdc.net/data/ip-geolocation?ip=${ip}&localityLanguage=es&key=${process.env.BIG_DATA_CLOUD_API_KEY}`
    );

    const geo = await fetching.json();
    if (!geo) return res.status(500).json({});

    const country = geo.country.name;
    const region = geo.location.principalSubdivision;
    const city = geo.location.city;
*/

    const result = await getPlaces({
      country: "Perú",
      region: "La Libertad",
      city: "Trujillo",
    });

    const start = result.text.indexOf("[");
    const end = result.text.lastIndexOf("]") + 1;
    const places = result.text.slice(start, end);

    const prompts = places
      .replace(/(\r\n|\n|\r|Trujillo|Perú|La Libertad|  |#|=|"|```)/gm, "")
      .replaceAll("/", "")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .trim()
      .split(",");

    console.log({
      country: "Peru",
      region: "La libertad",
      city: "Trujillo",
      prompts,
    });

    return res.status(200).json({
      country: "Peru",
      region: "La libertad",
      city: "Trujillo",
      prompts,
    });
  } catch (err) {
    return res.status(500).json({});
  }
}
