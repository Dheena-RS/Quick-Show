import connectDB from "./configs/db.js";
import Show from "./models/Show.js";

async function run() {
    await connectDB();
    const showData = await Show.findOne();
    if (!showData) return console.log("No show found");
    
    console.log("Found show ID:", showData._id.toString());
    const selectSeats = ["A1", "A2"];
    
    if (!Array.isArray(selectSeats)) {
        console.log("Not array:", selectSeats);
        return process.exit(0);
    }
    const occupiedSeats = showData.occupiedSeats || {};
    console.log("Current occupiedSeats:", occupiedSeats);
    const isAnySeatTaken = selectSeats.some(seat => {
        const taken = occupiedSeats[seat];
        console.log(`Seat ${seat} taken value:`, taken);
        return taken;
    });
    console.log("isAnySeatTaken:", isAnySeatTaken);
    console.log("Result (isAvailable):", !isAnySeatTaken);

    // Let's also test the exact function from bookingController
    // We can't easily import it if it uses req/res but we can just copy it
    const checkSeatsAvailability = async (showId, selectSeats) => {
        try {
            const showData = await Show.findById(showId);
            if (!showData) return false;
            if (!Array.isArray(selectSeats)) return false;
            const occupiedSeats = showData.occupiedSeats || {};
            const isAnySeatTaken = selectSeats.some(seat => occupiedSeats[seat]);
            return !isAnySeatTaken;
        } catch (error) {
            console.log("Error in checkSeatsAvailability:", error.message);
            return false;
        }
    };
    
    const result = await checkSeatsAvailability(showData._id, selectSeats);
    console.log("checkSeatsAvailability returned:", result);
    process.exit(0);
}
run();
