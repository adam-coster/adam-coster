const path = require("path");
const {
  setMicVolume,
  getLatestEpisodeRecordingFile,
  ensureSyncedEpisodeFolder,
} = require("./lib/utility.js");
const fs = require("fs");

const defaultVolume = process.env.REGULAR_MIC_VOLUME_PERCENT || "100";

/**
 * @param {string} audioFile
 */
function syncEpisode(audioFile) {
  const folder = ensureSyncedEpisodeFolder(audioFile);
  const outFile = path.join(folder, path.basename(audioFile));
  fs.copyFileSync(audioFile, outFile);
  return outFile;
}

async function finish() {
  setMicVolume(defaultVolume);
  const audioFile = getLatestEpisodeRecordingFile();
  syncEpisode(audioFile);
}

finish();
