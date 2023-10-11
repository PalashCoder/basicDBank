import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";

actor DBank {
  stable var currentMoney = 100;

  public query func checkBallance() : async Nat {
    return currentMoney;
  };

  public func add(ammount : Nat) {
    currentMoney += ammount;
    Debug.print(debug_show (currentMoney));
  };
  public func withDraw(ammount : Nat) {
    let temp : Int = currentMoney -ammount;
    if (temp >= 0) {
      currentMoney -= ammount;
      Debug.print(debug_show (currentMoney));
    } else {
      Debug.print("Cannot Withdraw");
    };
  };
};
