

signed_tx: {"ref_block_num":58392,"ref_block_prefix":2169301549,"expiration":"2023-11-02T18:26:36","operations":[["custom_json",{"required_auths":[],"required_posting_auths":["hackinhukk"],"id":"sm_assign_fray","json":"{\"guild_id\":\"649a16fe3b817780c4763175545ab8717d942fcc\",\"tournament_id\":\"GUILD-BC185-BL56-BRAWL2\",\"index\":2,\"player\":\"lacari\",\"app\":\"splinterlands/0.7.139\",\"n\":\"0XfZBzS9AV\"}"}]],"extensions":[],"signatures":["1f6cee9e6b184067ee44e3a3be56921ce29e617870355510e5ccfdfbe7bcb793832344200ba7c6a518a3d7c2a9ec5726116a353d6a0e9599995a6b43a89afa105a"]}

https://bcast.splinterlands.com/send
POST




https://api2.splinterlands.com/tournaments/frays?tournament_id=GUILD-BC185-BL56-BRAWL2&guild_id=649a16fe3b817780c4763175545ab8717d942fcc&v=1698949038857&token=CPE1VF0DXC&username=hackinhukk
query string parameters:

tournament_id: GUILD-BC185-BL56-BRAWL2
guild_id: 649a16fe3b817780c4763175545ab8717d942fcc
v: 1698949038857
token: CPE1VF0DXC
username: hackinhukk




# API TO get Splinterlands guild brawl data

https://api2.splinterlands.com/guilds/find?id=649a16fe3b817780c4763175545ab8717d942fcc

we then want the "tournament_id": "GUILD-BC185-BL56-BRAWL2"


# final API for data

https://api.splinterlands.com/tournaments/find_brawl?id=GUILD-BC185-BL56-BRAWL2&guild_id=649a16fe3b817780c4763175545ab8717d942fcc&v=1699283196634&token=CPE1VF0DXC&username=hackinhukk

this allows us to use the brawl id, and ultimately get the status of the brawl (should be 0), as well as the players array

"players": [
{
"total_battles": 8,
"entered_battles": 8,
"player": "lacari",
"join_date": "2023-11-02T18:17:15.000Z",
"wins": 7,
"losses": 1,
"draws": 0,
"finish": 3,
"meta_pts": 138,
"meta_pts_float": 2472,
"defeated": "alfaz1,urbandub,dragonmaster18,arxirei79,mieteeek,vazthink,sic-treasury",
"fray_index": 2,
"brawl_level": 5,
"player_data": {
"player": "lacari",
"rating": 2589,
"avatar_id": 0,
"title_pre": null,
"title_post": null,
"display_name": null,
"league": 9,
"modern_league": 7,
"collection_power": 310005,
"starter_pack_purchase": true,
"guild_id": "649a16fe3b817780c4763175545ab8717d942fcc",
"guild_rank": 1,
"guild_join_date": "2022-03-31T20:37:03.000Z",
"guild_status": "active"
}
},

we want to get the player, fray index, for example nickmercs should be fray spot 0



git checkout master
git pull origin master
git merge test
git push origin master




https://api.splinterlands.com/tournaments/find_brawl?id=GUILD-BC186-BL56-BRAWL6&guild_id=649a16fe3b817780c4763175545ab8717d942fcc&token=CPE1VF0DXC&username=hackinhukk
we actually need to have the login token to get the info of whose signed up for brawls


"frays": [
{
"cycle": 186,
"tournament_id": "GUILD-BC186-BL56-BRAWL6",
"guild_id": "649a16fe3b817780c4763175545ab8717d942fcc",
"index": 4,
"player": "mefi13",
"brawl_level": 5,
"guild_join_date": "2021-04-02T22:46:18.000Z",
"avatar_id": 13,
"title_pre": null,
"title_post": null,
"display_name": null,
"league": 7,
"modern_league": 0,
"collection_power": 405020,
"rank": 1
},
{
"cycle": 186,
"tournament_id": "GUILD-BC186-BL56-BRAWL6",
"guild_id": "649a16fe3b817780c4763175545ab8717d942fcc",
"index": 5,
"player": "boysofthedwarf",
"brawl_level": 5,
"guild_join_date": "2021-06-28T00:02:24.000Z",
"avatar_id": 18,
"title_pre": null,
"title_post": null,
"display_name": null,
"league": 0,
"modern_league": 0,
"collection_power": 416885,
"rank": 2
},
{
"cycle": 186,
"tournament_id": "GUILD-BC186-BL56-BRAWL6",
"guild_id": "649a16fe3b817780c4763175545ab8717d942fcc",
"index": 7,
"player": "giantkiller2p",
"brawl_level": 5,
"guild_join_date": "2021-04-26T03:56:24.000Z",
"avatar_id": 12,
"title_pre": null,
"title_post": null,
"display_name": null,
"league": 9,
"modern_league": 0,
"collection_power": 858471,
"rank": 3
},
{
"cycle": 186,
"tournament_id": "GUILD-BC186-BL56-BRAWL6",
"guild_id": "649a16fe3b817780c4763175545ab8717d942fcc",
"index": 8,
"player": "stobbart",
"brawl_level": 5,
"guild_join_date": "2021-06-13T05:23:27.000Z",
"avatar_id": 17,
"title_pre": null,
"title_post": null,
"display_name": null,
"league": 1,
"modern_league": 3,
"collection_power": 194365,
"rank": 1
}
],




# for removing from fray


signed_tx: {"ref_block_num":10078,"ref_block_prefix":22531771,"expiration":"2023-11-07T22:08:00","operations":[["custom_json",{"required_auths":[],"required_posting_auths":["nickmercs"],"id":"sm_leave_fray","json":"{\"guild_id\":\"649a16fe3b817780c4763175545ab8717d942fcc\",\"tournament_id\":\"GUILD-BC186-BL56-BRAWL6\",\"player\":\"hackinhukk\",\"app\":\"splinterlands/0.7.139\",\"n\":\"wcbcHLUGxU\"}"}]],"extensions":[],"signatures":["1f2577f1bd45b9abce8bdcdc7a93c87aae4087d83f500056b0821f76e443520a024b7aeb74abf88145b79259fdedecf01b0ba15b91c7fecdef4a78eae457e76793"]}