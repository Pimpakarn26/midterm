//Persoon//
class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  // getName() {
  //   return this.name;
  // }
  // getAddress() {
  //   return this.address;
  // }

  // setAddress(address) {
  //   this.address = address;
  // }
  // getEmail() {
  //   return this.email;
  // }
  // setEmail(email) {
  //   this.email = email;
  // }
  // getPhone() {
  //   return this.phone;
  // }
  // setPhone(phone) {
  //   this.phone = phone;
  // }
  // getAccountType() {
  //   return this.accountType;
  // }

  setAccountType(accountType) {
    this.accountType = accountType;
  }
  toString() {
    return `Person[name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
  }
}

//Guest//
class Guest extends Person {
  roombookings = [];
  totalRoomBookings = 0;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  addRoomBooking(roombooking) {
    this.roombookings.push(roombooking);
  }
  createBooking(reservationNumber, statusDate, durationDays, room) { 
    // //ตรวจห้องว่าง
    // const isRoomAvailable = this.isRoomAvailable(room, startDate, durationDays);

    if(isRoomAvailable) {
      const booking = new RoomBooking (
        reservationNumber, 
        startDate,
        durationDays,
        room,
      );
      this.addRoomBooking(booking);
      this.totalRoomBookings++;
      return booking;
   } 
  }
  toString() {
    inbooking = "";
    return `${super.toString()}, AccountType = ${this.accountType}`;
  }
}

//Receptionist//
class Receptionist extends Person {
  roomBooking = [];
  totalRoomBook = 0;
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  addRoomBooking(roomBooking) {
    this.roomBooking.push(roomBooking);
  }
  createBooking() {
    return this.createBooking
  }
  toString() {
    return `${super.toString()}, AccountType = ${this.accountType}`;
  }
}

//Account//
class Account {
  username = "";
  password = "";
  status = "";
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }
  getUsername() {
    return this.username;
  }
  setUsername(username) {
    this.username = username;
  }
  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
  }
  resetPassword(username, newPassword) {
    this.username = username;
    this.newPassword = newPassword;
  }
  toString() {
    return `Account[username = ${this.username}, password = ${this.password}, status = ${this.status}, login = ${this.login}, resetPassword = ${this.resetPassword}]`;
  }
}

//Hotel//
class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  // getName() {
  //   return this.name;
  // }
  // getLocation() {
  //   return this.location;
  // }
  // getRooms() {
  //   return this.rooms;
  // }
  getRoom() {
  }
  addNewRoom(room) {
    this.rooms.push(room);
  }
  toString() {
    let inHotel = ""
    for (let i = 0; i < this.rooms.length; i++) {
      inHotel += "\t" + `${this.rooms[i].toString()}` + "\n";
    }
    return `Hotel : ${this.name} ${this.location} \n ${inHotel}`;
  }
}

class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;

  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(roomNumber) {
    return (this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE);
  }
  createRoom(roomNumber, style, status, Price) {
    const room = new Room(roomNumber, style, status, Price);

  }
  toString() {
    return `Room [${this.roomNumber} , ${this.style} , ${this.roomPrice}, ${this.status}]`;
  }
}

//RoomBooking//
class RoomBooking {
  reservationNumber = "";
  statusDate = "";
  durationDays = 0;
  status = null;
  createdBy = null;
  constructor(reservationNumber,
    statusDate, durationDays, status, createdBy) {
    this.reservationNumber = reservationNumber;
    this.statusDate = statusDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }
  toString() {
    return `\n Detail: [Reservation Number ${this.reservationNumber}, 
    Start Date: ${this.statusDate}, Duration: ${this.durationDays},
    Status: ${this.status}, Created by: ${this.createdBy.name}]`;
  }
  createBooking(reservationNumber, statusDate, durationDays, guest, room) {}
}

//Notification//
class Notification {
  notificationId = 0;
  createdOn = "";
  content = "";
  sender = ""; // แก้จาก "serder" เป็น "sender"
  recipient = ""; // แก้จาก "recipieent" เป็น "recipient"
  constructor(notificationId, createdOn, content, sender, recipient) {
    this.notificationId = notificationId;
    this.createdOn = createdOn;
    this.content = content; // แก้ content = content
    this.sender = sender;
    this.recipient = recipient;
  }
}

//Enum//
class AccountType {
  static GEUST = "guest";
  static RECEPTIONIST = "recipieent";
  constructor(name) {
    this.name = name;
  }
}
class RoomStatus {
  static AVAILABLE = "available";
  static DISAVAILABLE = "disavailable";
  static LATECHCKOUT = "latechckout";
  static EARLYCHECKELN = "earlycheckeln";
  constructor(name) {
    this.name = name;
  }
}
class RoomStyle {
  static DOUBLE_POOL = "Double bed pool view";
  static DOUBLE_SEA = "Double bed Sea view";
  static TWIN_POOL = "Twin bed pool view";
  static TWIN_SEA = "Twin bed Sea view";
  constructor(name) {
    this.name = name;
  }
}

//ประกาศ//
const main = () => {
  //Guest1//
  const alice = new Guest(
    "Alice",
    "Rayong",
    "Alice001@gmail.com",
    "0899999990",
    AccountType.GEUST
  );
  console.log(alice.toString());

  //Guest2//
  const bob = new Guest(
    "Bob",
    "Rayong",
    "Bobb01@gmail.com",
    "0888999990",
    AccountType.GEUST
  );
  console.log(bob.toString());

  //Receptionist1//
  const catherine = new Receptionist(
    "Catherine",
    "Rayong",
    "Cathr11@gmail.com",
    "0878945612",
    AccountType.RECEPTIONIST
  );
  console.log(catherine.toString());

  //Receptionist2//
  const david = new Receptionist(
    "David",
    "Rayong",
    "David99@gmail.com",
    "0965412378",
    AccountType.RECEPTIONIST
  );
  console.log(david.toString());
}

//Hotel//
const hotel = new Hotel("SE Hotel", "NPRU")

//Room//
const room1 = new Room(
  "Room1",
  RoomStyle.DOUBLE_POOL,
  RoomStatus.AVAILABLE,
  10000
);

const room2 = new Room(
  "Room2",
  RoomStyle.DOUBLE_SEA,
  RoomStatus.AVAILABLE,
  12000
);

const room3 = new Room(
  "Room3",
  RoomStyle.TWIN_POOL,
  RoomStatus.AVAILABLE,
  6500
);

const room4 = new Room(
  "Room4",
  RoomStyle.TWIN_SEA,
  RoomStatus.AVAILABLE,
  7500
);
hotel.addNewRoom(room1);
hotel.addNewRoom(room2);
hotel.addNewRoom(room3);
hotel.addNewRoom(room4);


//print hotel and room//
console.log(hotel.toString());
console.log(room1.isRoomAvailable("Room1"));
console.log(room2.isRoomAvailable("Room2"));
console.log(room3.isRoomAvailable("Room3"));
console.log(room4.isRoomAvailable("Room4"));

//print roombooking//
console.log(alice.createBooking("R01", "11/03/2567", 10, room1));

main();

