<script lang="ts">
	let inputDevices: MediaDeviceInfo[] = [];
	let outputDevices: MediaDeviceInfo[] = [];

	function cleanAudioDeviceList(devices: MediaDeviceInfo[]) {
		return devices
			.filter(
				(device) => !['default', 'communications'].includes(device.deviceId),
			)
			.map((device) => {
				let label = device.label.replace(/^(.*)\([\w:]+\)$/, '$1').trim();
				return {
					...device,
					label,
				};
			});
	}
	async function listAudioDevices() {
		// Get permissions so we can see all audio devices
		const media = await navigator.mediaDevices.getUserMedia({
			audio: true,
		});

		// Get all audio devices
		const devices = await navigator.mediaDevices.enumerateDevices();
		inputDevices = cleanAudioDeviceList(
			devices.filter((device) => device.kind === 'audioinput'),
		);
		outputDevices = cleanAudioDeviceList(
			devices.filter((device) => device.kind === 'audiooutput'),
		);
	}

	listAudioDevices();
</script>

<h1>Podbot</h1>

{#if inputDevices.length > 0 || outputDevices.length > 0}
	<form on:submit|preventDefault={() => {}}>
		<select>
			{#each inputDevices as device}
				<option
					value={device.deviceId}
					data-kind={device.kind}
					data-group-id={device.groupId}>{device.label}</option
				>
			{/each}
		</select>
	</form>
{/if}

<style>
</style>
