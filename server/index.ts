import { Logger } from "./logger";

const logger = Logger.getInstance();

// text logger
logger.verbose("This is a verbose message.");
logger.info("This is an info message.");
logger.warning("This is a warning message.");
logger.error("This is an error message.");
