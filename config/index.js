module.exports = {
  project: {
    name: 'ATM Rekognition',
    shortName: 'ATMR',
    themeColor: '#1d2229',
    backgroundColor: '#1d2229',
  },
  secret: 'sUp3-rS.ecr3t{pass}',
  databaseUri:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/rekognition',
}
