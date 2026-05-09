import ClassRoom from './0-classroom.js';

/**
 * class return room
 * @returns {ClassRoom[]} contain 4 objects of ClassRoom
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
