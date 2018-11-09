var numUniqueEmails = function(emails) {
    let emailsSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        let local = getLocal(emails[i]);
        let domain = getDomain(emails[i]);
        let email = local.concat(domain);
        if (!emailsSet.has(email)) {
            emailsSet.add(email);
        }
    }  
    return emailsSet.size;  
};

function getLocal(email) {
    let local = "";
    let domain = "";
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@" || email[i] === "+") {
            break;
        } else if (email[i] !== ".") {
            local = local.concat(email[i]);
        }    
    }
    return local.concat(domain);
}

function getDomain(email) {
    let domain = "";
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            domain = domain.concat(email.slice(i));
        }
    }
    return domain;
}

let test = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(test));