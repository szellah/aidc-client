import React, { useState } from 'react';
import { Modal } from 'react-native';
import Notifications from './Notifications';

export default function NotificationBox({
	visibility,
	VisibilityHandler,
	content,
}) {
	/** Warunkowe otwieranie jednego z powiadomień (Błędu/ Informacji)  w obiekcie typu Modal */
	return (
		<Modal visible={visibility} transparent={true} animationType="fade">
			{!content.error && (
				<Notifications
					VisibilityHandler={VisibilityHandler}
					message={content.message}
					color="orange"
				/>
			)}
			{content.error && (
				<Notifications
					VisibilityHandler={VisibilityHandler}
					message={JSON.stringify(content.message)}
					color="red"
				/>
			)}
		</Modal>
	);
}
