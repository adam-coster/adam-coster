const open = require('open');
const fs = require('fs-extra');
const audio = require('win-audio');
const os = require('os');
const path = require('path');
const home = os.homedir();

const audioFileFolder = process.env.AUDACITY_OUTPUT_FOLDER || `${home}/Music/`;
exports.audioFileFolder = audioFileFolder;

/**
 * @param {any} claim
 * @param {string} [message]
 * @returns {asserts claim}
 */
function assert(claim, message = 'Unexpected Error') {
	if (!claim) {
		throw new Error(message);
	}
}
exports.assert = assert;

/**
 * @param {string} string
 */
function getInternalNumberFromString(string) {
	const numInStringRegex = /(?!<\d)(\d{3})(?!>\d)/;
	const numInStringMatch = numInStringRegex.exec(string);
	assert(numInStringMatch, `String "${string}" does not include a number`);
	return parseInt(numInStringMatch[1]);
}
exports.getInternalNumberFromString = getInternalNumberFromString;

/**
 * @param {string[]} strings
 */
function sortStringsByInternalNumber(strings) {
	return strings.sort((a, b) => {
		const aNum = getInternalNumberFromString(a);
		const bNum = getInternalNumberFromString(b);
		return aNum - bNum;
	});
}
/**
 * @param {'flac'|'aup'} type
 */
function isEpisodeFile(type) {
	/** @param {string} filename */
	return (filename) => {
		const isRightType = filename.endsWith(type);
		try {
			assert(isRightType);
			getInternalNumberFromString(filename); // Throws if not possible
			return true;
		} catch {
			return false;
		}
	};
}
/**
 * @param {string} folder
 */
function getFilesInFolder(folder) {
	return fs.readdirSync(folder).map((file) => path.join(folder, file));
}
function getEpisodeFlacFiles() {
	const audioFiles = sortStringsByInternalNumber(
		getFilesInFolder(audioFileFolder).filter(isEpisodeFile('flac')),
	);
	return audioFiles;
}
function getEpisodeAupFiles() {
	const audioFiles = sortStringsByInternalNumber(
		getFilesInFolder(audioFileFolder).filter(isEpisodeFile('aup')),
	);
	return audioFiles;
}

function getLatestEpisodeAupFile() {
	const audacityProjects = getEpisodeAupFiles();
	return audacityProjects[audacityProjects.length - 1];
}
exports.getLatestEpisodeNumber = getLatestEpisodeNumber;

function getLatestEpisodeRecordingFile() {
	const flacFiles = getEpisodeFlacFiles();
	return flacFiles[flacFiles.length - 1];
}
exports.getLatestEpisodeRecordingFile = getLatestEpisodeRecordingFile;

function getLatestEpisodeNumber() {
	const lastRecordingNumber = getInternalNumberFromString(
		getLatestEpisodeRecordingFile(),
	);
	const lastAudacityProjectNumber = getInternalNumberFromString(
		getLatestEpisodeAupFile(),
	);
	assert(
		lastRecordingNumber == lastAudacityProjectNumber,
		`Last episode number (${lastRecordingNumber}) does not match last audacity project number (${lastAudacityProjectNumber})`,
	);

	return lastRecordingNumber;
}
exports.getLatestEpisodeNumber = getLatestEpisodeNumber;

/**
 * @param {string} percent
 */
function setMicVolume(percent) {
	audio.mic.set(parseInt(percent));
}
exports.setMicVolume = setMicVolume;

function findSyncedPodcastFolder() {
	return 'G:\\Shared drives\\Podcast';
}

/**
 * @param {string} audioFile
 */
function ensureSyncedEpisodeFolder(audioFile) {
	const parent = findSyncedPodcastFolder();
	const folder = path.join(parent, `${getInternalNumberFromString(audioFile)}`);
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
	}
	open(folder);
	return folder;
}
exports.ensureSyncedEpisodeFolder = ensureSyncedEpisodeFolder;
