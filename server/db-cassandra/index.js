const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'bitly'
});

const query = 'SELECT * FROM urls';

client.execute(query)
  .then(result => console.log('User with email %s', result.rows[0]));