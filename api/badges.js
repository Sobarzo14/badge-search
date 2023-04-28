export default async function handler(request, res) {

  const badges = [
    {
      "name": "Stage Crew stamp",
      "creator": "Aunt Arctic",
      "category": "Easy",
      "icon": "av:airplay"
    },
    {
      "name": "Underground stamp",
      "creator": "Dancing Penguin",
      "category": "Easy",
      "icon": "image:brightness-3"
    },
    {
      "name": "Snapshot stamp",
      "creator": "Franky",
      "category": "Easy",
      "icon": "image:add-a-photo"
    },
    {
      "name": "Go Swimming stamp",
      "creator": "Bambadee",
      "category": "Easy",
      "icon": "invert-colors"
    },
    {
      "name": "Clock Target stamp",
      "creator": "Captain Rockhopper",
      "category": "Easy",
      "icon": "device:access-time"
    },
    {
      "name": "183 days! stamp",
      "creator": "Cadence",
      "category": "Medium",
      "icon": "perm-contact-calendar"
    },
    {
      "name": "Igloo Party stamp",
      "creator": "Aunt Arctic",
      "category": "Medium",
      "icon": "image:music-note"
    },
    {
      "name": "Special Agent stamp",
      "creator": "Jet Pack Guy",
      "category": "Medium",
      "icon": "image:remove-red-eye"
    },
    {
      "name": "Dig All Day Stamp",
      "creator": "Rookie",
      "category": "Medium",
      "icon": "image:nature"
    },
    {
      "name": "Every Color Stamp",
      "creator": "Aunt Arctic",
      "category": "Medium",
      "icon": "image:palette"
    },
    {
      "name": "365 days! stamp",
      "creator": "Aunt Arctic",
      "category": "Hard",
      "icon": "perm-contact-calendar"
    },
    {
      "name": "Full House stamp",
      "creator": "Aunt Arctic",
      "category": "Hard",
      "icon": "home"
    },
    {
      "name": "Berg Drill! stamp",
      "creator": "Rory",
      "category": "Hard",
      "icon": "settings"
    },
    {
      "name": "Treasure Box stamp",
      "creator": "Captain Rockhopper",
      "category": "Hard",
      "icon": "card-giftcard"
    },
    {
      "name": "Ninja Meeting stamp",
      "creator": "Sensei",
      "category": "Extreme",
      "icon": "supervisor-account"
    },
    {
      "name": "Fort Battle stamp",
      "creator": "Rookie",
      "category": "Extreme",
      "icon": "hardware:security"
    }
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
  res.json(badges);
}
