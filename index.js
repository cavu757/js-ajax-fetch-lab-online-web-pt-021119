const baseURL = 'https://api.github.com';
const user = 'cavu757';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  //use fetch to fork it!
  fetch(baseURL+'/repos/'+repo+'/forks', {
    method: 'POST',
    headers: {Authorization: `token ${token}`}})
    .then(response => response.json())
    .then(json => showResults(json))
}



function showResults(json) {
  //use this function to display the results from forking via the API
  return document.getElementById('results').innerHTML = json.html_url

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';
  const token = getToken();
  const titleData = document.getElementById('title').value;
  const bodyData = document.getElementById('body').value;
  const issueObject = {
    title: titleData,
    body: bodyData
  }
  const issuesURL = `${baseURL}/repos/${user}/${repo}/issues`

  fetch(issuesURL, {
    method: 'POST',
    body: JSON.stringify(issueObject),
    headers: {Authorization: `token ${token}`}
    }
  ).then(response => getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  document.getElementById('issues').innerHTML = '<br>';
  const repo = 'js-ajax-fetch-lab';
  const token = getToken();
  const issuesURL = `${baseURL}/repos/${user}/${repo}/issues`

  fetch(issuesURL, {
    method: 'GET',
    headers: {Authorization: `token ${token}`}
    }
  ).then(response => response.json()
).then(json => json.forEach(item => document.getElementById('issues').innerHTML += '<li>'+item.title+'</li>'))

}
