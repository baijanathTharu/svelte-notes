// import MyCustomComponent from '...';

import ModalForm from '$components/modal-form.svelte';
import { modalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';

export function triggerModalForm(): void {
	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: ModalForm,
		// Add your props as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide default slot content as a template literal
		slot: '<p>Skeleton</p>'
	};
	const d: ModalSettings = {
		type: 'component',
		// NOTE: title, body, response, etc are supported!
		component: modalComponent
		// Pass abitrary data to the component
		// meta: { foo: 'bar', fizz: 'buzz', fn: myCustomFunction }
	};
	modalStore.trigger(d);
}
