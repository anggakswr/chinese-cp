import { headers } from "next/headers";

export default async function getDomain() {
  const headersList = headers();
  const protocol = (await headersList).get("x-forwarded-proto") || "";
  const domain = (await headersList).get("host") || "";

  return `${protocol}://${domain}`;
}
