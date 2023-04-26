import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Player: {},
};

const pluralNames = { Player: 'player' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
