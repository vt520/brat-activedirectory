ConnectDriver("ActiveDirectory");
ConnectDriver("Box");
let boxUsers = AllUsersByEmail();
let adUsers = AD_GetActiveUsers();
let missingADUsers = [];
let missingBoxUsers = [];

for (const adUser of adUsers) {
    //LogMessage("User", LogFlags.Important, adUser);
    let email = String(adUser.Email.Value).toLowerCase();
    let boxUser = boxUsers[email];
    if (boxUser == null) {
        missingADUsers.push(email);
    }
}

LogMessage("Active Directory Users without a Box Login",
    LogFlags.Important,
    {
        users: missingADUsers
    }
);
