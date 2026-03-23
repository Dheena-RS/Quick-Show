import connectDB from "./configs/db.js";
import Show from "./models/Show.js";

async function run() {
    try {
        await connectDB();
        const shows = await Show.find();
        let cleared = 0;
        for (const show of shows) {
            if (show.occupiedSeats && Object.keys(show.occupiedSeats).length > 0) {
                console.log(`Clearing seats for show ${show._id}`);
                show.occupiedSeats = {};
                show.markModified("occupiedSeats");
                await show.save();
                cleared++;
            }
        }
        console.log(`Cleared seats for ${cleared} shows.`);
    } catch (e) {
        console.error(e.message);
    } finally {
        process.exit(0);
    }
}
run();
