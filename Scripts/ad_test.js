ConnectDriver("ActiveDirectory");
ConnectDriver("Box");
let test = AllUsersByEmail();
LogMessage("All Users", LogFlags.Important, { users: test });

let user1 = AD_GetUser("mark@energyservices.org");
let user2 = AD_GetUser("CN=Gulam Sabirov,OU=Management,OU=Accounts,DC=energyservices,DC=org");
let user3 = AD_GetUser("Patrice Roduner");
let groups = AD_GetGroups();
LogMessage("Testing", LogFlags.Important, { users: [user1, user2, user3], groups: groups });

