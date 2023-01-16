const fs = require('fs-extra');
const path = require('path');
const open = require('open');
const {
	getLatestEpisodeNumber,
	setMicVolume,
	assert,
	audioFileFolder,
	ensureSyncedEpisodeFolder,
} = require('./lib/utility');

// Find the Audacity exe
const audacityPath =
	process.env.AUDACITY_PATH ||
	'C:\\\\Program Files (x86)\\Audacity\\audacity.exe';
const person = process.env.PERSON_NAME || 'Adam';
const recordingVolume = process.env.RECORDING_VOLUME_PERCENT || '87';

function assertTargetPathsExist() {
	assert(
		fs.existsSync(audioFileFolder),
		`AUDACITY_OUTPUT_FOLDER ("${audioFileFolder}") does not exist.`,
	);
	assert(
		fs.existsSync(audacityPath),
		`AUDACITY_PATH ("${audacityPath}") does not exist`,
	);
}

function getNextEpisodeAudacityPath() {
	const lastEpisode = getLatestEpisodeNumber();
	const nextEpisodeNumber = lastEpisode + 1;
	const nextEpisodeName = `ep${nextEpisodeNumber}_${person}.aup`;
	return path.join(audioFileFolder, nextEpisodeName);
}

/**
 * @param {string} projectPath
 */
function createAudacityProject(projectPath) {
	const project_name = path.parse(projectPath).name;
	const project_data = `${project_name}_data`;
	const template = fs.readFileSync(__dirname + '/audacity-template.aup', {
		encoding: 'utf8',
	});
	fs.ensureDirSync(path.join(path.dirname(projectPath), project_data));
	fs.writeFileSync(
		projectPath,
		template.replace('{{PROJECT_NAME}}', project_data),
	);
}

function setup() {
	assertTargetPathsExist();
	const nextEpisodeAudacityPath = getNextEpisodeAudacityPath();
	createAudacityProject(nextEpisodeAudacityPath);
	setMicVolume(recordingVolume);
	open(nextEpisodeAudacityPath);
	ensureSyncedEpisodeFolder(nextEpisodeAudacityPath);
}

setup();
