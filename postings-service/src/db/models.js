import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Posting extends Model {}
Posting.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: 'postings' }
);
