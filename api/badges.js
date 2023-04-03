export default async function handler(request, res) {
  const roster = [
    {
      badge: 'https://www.roblox.com/asset/?id=123456789',
      name: 'Badge Name',
      description: 'Badge Description',
      id: 123456789,
    },
    {
      badge: 'https://www.roblox.com/asset/?id=987654321',
      name: 'Badge Name',
      description: 'Badge Description',
      id: 987654321,
    },
    {
      badge: 'https://www.roblox.com/asset/?id=123987456',
      name: 'Badge Name',
      description: 'Badge Description',
      id: 123987456,
    },
  ];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(roster);
}
