import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { allPostsQuery, postDetailQuery } from "../../../utils/queries";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const query = postDetailQuery(id);

    const data = await client.fetch(query);
    res.status(200).json(data[0]);
  }
}
