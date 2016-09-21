var client = require('mysql').createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'123456',
  database: 'student'
});
  
console.log('Connecting to MySQL...');
  
client.connect(function(error, results) {
  if(error) {
    console.log('Connection Error: ' + error.message);
    return;
  }
  console.log('Connected to MySQL');
  ClientConnectionReady(client);
});
  
ClientConnectionReady = function(client)
{
    client.query('USE student', function(error, results) {
        if(error) {
            console.log('ClientConnectionReady Error: ' + error.message);
            client.end();
            return;
        }
        ClientReady(client);
    });
};
  
ClientReady = function(client)
{
  var values = ['Chad', 'Lung', 'Hello World'];
  client.query('INSERT INTO MyTable SET firstname = ?, lastname = ? , message = ?', values,
    function(error, results) {
      if(error) {
        console.log("ClientReady Error: " + error.message);
        client.end();
        return;
      }
      console.log('Inserted: ' + results.affectedRows + ' row.');
      console.log('Id inserted: ' + results.insertId);
    }
  );
  GetData(client);
}
  
GetData = function(client)
{
  client.query(
    'SELECT * FROM MyTable',
    function selectCb(error, results, fields) {
      if (error) {
          console.log('GetData Error: ' + error.message);
          client.end();
          return;
      }
  
      if(results.length > 0)
      {
        var firstResult = results[0];
        console.log('First Name: ' + firstResult['firstname']);
        console.log('Last Name: ' + firstResult['lastname']);
        console.log('Message: ' + firstResult['message']);
      }
  });
  
  client.end();
  console.log('Connection closed');
};