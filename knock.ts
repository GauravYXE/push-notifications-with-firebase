import Knock from "@knocklabs/client";

const knock = new Knock("process.env.KNOCK_API"); // Ensure your API key is correct

export default knock;
