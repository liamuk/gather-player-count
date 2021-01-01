import { Game } from "@gathertown/gather-game-client";
import { MoveDirection, GameState, Player } from "@gathertown/gather-game-common";

global.WebSocket = require("isomorphic-ws");

let API_KEY = "YOUR API KEY"
let SPACE_ID = "oxrhEtb3sV7VutbQ\\GatherOffice";

const onPlayers = (players: GameState<Player>) => {
  console.log(Object.keys(players).length);
};
const onSpace = (space: any) => {
};
const onMap = (map: any) => {
};
const onMessage = (message: any) => {
};
const onChat = (chat: any) => {
};

let game = new Game();
game.authenticateAPIKey(API_KEY);
game.connect(SPACE_ID);
game.subscribeToSpace(SPACE_ID, onPlayers, onSpace, onMap, onMessage, onChat);
