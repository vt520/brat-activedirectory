using System;
using System.DirectoryServices;

namespace Brat.Drivers {
    public class ActiveDirectory : Driver {
        private DriverAPI api;
        public readonly DirectoryEntry Connection;
        
        public ActiveDirectory(string profile_name = "") : base(profile_name) {
            //Settings = PersistantSettings.Get<ActiveDirectorySettings>();
            DirectoryEntry ad_Info  = new DirectoryEntry("LDAP://RootDSE");
            Connection = new DirectoryEntry($"LDAP://{ad_Info.Properties["defaultNamingContext"][0]}");
            api = new ActiveDirectoryAPI(this);
            Running = true;
        }
        public override DriverAPI GetAPI() {
            return api;
        }
    }
    public partial class ActiveDirectorySettings : PersistantSettings {
        public ActiveDirectorySettings() : base("activedirectory") { }
    }
    public partial class ActiveDirectoryAPI : DriverAPI {
        private ActiveDirectory Driver;
        public ActiveDirectoryAPI(ActiveDirectory instance) { Driver = instance;  }
    }
}
