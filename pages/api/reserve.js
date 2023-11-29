let reservations = [
  {
    RS_SEQ: 1,
    RS_NAME: "David",
    RS_PHONE: "01089032573",
    RS_DATE: 16548790,
    RS_GUESTS: 1,
    RS_TABLES: [],
    RS_NOTE: "테스트",
    RS_COMPLETE: "N",
    RS_DELETE: "N",
    RS_DTTM: 1564897890,
  },
];

let initReservation = {
  RS_SEQ: reservations.length + 1,
  RS_COMPLETE: "N",
  RS_DELETE: "N",
};

export default function handler(req, res) {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      if (query.SEQ) {
        // GET /api/reserve/:SEQ
        const reservation = reservations.find(
          (r) => r.RS_SEQ === parseInt(query.RS_SEQ)
        );
        if (reservation) {
          res.status(200).json(reservation);
        } else {
          res.status(404).json({ error: "Reservation not found" });
        }
      } else {
        // GET /api/reserve
        res.status(200).json(reservations.filter((r) => r.RS_DELETE !== "Y"));
      }
      break;
    case "POST":
      // POST /api/reserve
      const newReservation = {
        RS_DTTM: new Date(),
        ...initReservation,
        ...body,
      };
      reservations.push(newReservation);
      res.status(201).json(reservations);
      break;
    case "PUT":
      // PUT /api/reserve/:id
      const indexToUpdate = reservations.findIndex(
        (r) => r.RS_SEQ === parseInt(query.SEQ)
      );
      if (indexToUpdate !== -1) {
        reservations[indexToUpdate] = {
          ...reservations[indexToUpdate],
          ...body,
        };
        res.status(200).json({ message: "Update complete" });
      } else {
        res.status(404).json({ error: "Reservation not found" });
      }
      break;
    case "DELETE":
      // DELETE /api/reserve/:id
      const findIndex = reservations.findIndex(
        (r) => r.RS_SEQ === parseInt(query.SEQ)
      );
      if (findIndex !== -1) {
        const newReservations = reservations[findIndex];
        res.status(200).json({ message: "Reservation deleted", findReserve });
      } else {
        res.status(404).json({ error: "Reservation not found" });
      }
      break;
    default:
      res.status(404).json({ error: "Not Found" });
      break;
  }
}
