

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