import { ButtonActions } from '../types/actions.type';

export function playersActions(
  onActionHandler: (action: ButtonActions) => void
) {
  return [
    {
      label: 'Update',
      icon: 'pi pi-user-edit',
      command: () => {
        onActionHandler('edit');
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
      command: () => {
        onActionHandler('delete');
      },
    },
  ];
}
