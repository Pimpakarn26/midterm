//Persoon//
class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "guest";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  getPhone() {
    return this.phone;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  getAccountType() {
    return this.accountType;
  }
  setAccountType(accountType) {
    this.accountType = accountType;
  }
  toString() {
    return `Person[name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
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

class Receptionist {
  createBooking() {}
}

class Guest {
  totalRoomBook = 0;
}

class Hotel {
  name = "";
  lacation = "";
  constructor(name, lacation) {
    this.name = name;
    this.lacation = lacation;
  }
  getName() {
    return this.name;
  }
  getLocation() {
    return this.lacation;
  }
  getRooms() {
    return this.rooms;
  }
  addnewRooms(room) {
    this.room = room;
  }
  toString() {
    return `Hotel[name = ${this.name}, location = ${this.location}, rooms = ${this.rooms}]`;
  }
}

class Room {
  roomNumber = "";
  style = "RoomStyle";
  status = "RoomStatus";
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  getRoomNumber() {
    return this.roomNumber;
  }
  setRoomNumber(roomNumber) {
    this.roomNumber = roomNumber;
  }
  getStyle() {
  return this.style;
  }
  isRoomAvailable(roomNumber) {
   return this.status === "available";
  }
  createRoom(roomNumber, style, status, price) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.price = price;
  }
}

class RoomBooking extends Person {
  reservationNumber = "";
  statusDate = "";
  durationDays = 0;
  status = "BookingStatus";
  createdBy = ""; // เปลี่ยนจาก "Person" เป็น ""
  constructor(reservationNumber, statusDate, durationDays, status, createdBy) {
    super(); // เรียก constructor ของคลาส Person
    this.reservationNumber = reservationNumber;
    this.statusDate = statusDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }
}


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


const main = () => {
  const person1 = new Person(
    "Alice",
    "Rayong",
    "Alice001@gmail.com",
    "0899999990",
    "Guest"
  );
  const person2 = new Person(
    "Bob", 
    "Rayong", 
    "Bobb01@gmail.com", 
    "0888999990",
    "Guest"
    );
  
  console.log(person1.toString());
  console.log(person2.toString());
};

 
