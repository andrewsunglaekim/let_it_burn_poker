var Decider = function(dealer){
  this.players = dealer.players
  this.board = dealer.board
}

Decider.prototype = {
  entireHand: function(player){
    return player.hand.concat(this.board)
  },
  determineWinner: function(player){

  },
  straight_flush: function(player){
    console.log(true)
  }


}

// straight flush
// 4-of-a-kind
// full-house
// flush
// straight
//trips
//two-pair
//
