//license function
const generateLicenseBadge = license => {
    if(license === "Apache"){
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }

    if(license === "Boost"){
        return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    
    if(license === "MIT"){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    }

    if(license === "Mozilla"){
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }

    if(license === "Perl"){
        return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    }

    if(license === "IBM"){
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    }
};

const generateLicenseNotice = license => {
    if(license === "Apache"){
        return 'Apache';
    }

    if(license === "Boost"){
        return 'Boost';
    }
    
    if(license === "MIT"){
        return 'MIT';

    }

    if(license === "Mozilla"){
        return 'Mozilla';
    }

    if(license === "Perl"){
        return 'Perl';
    }

    if(license === "IBM"){
        return 'IBM';
    }
};

const generateReadMe = data => {
    return `# ${data.title}


${generateLicenseBadge(data.license)}


# Table of Contents<br/>
[Description](#description)<br/>
[Installation](#installation)<br/>
[Usage](#usage)<br/>
[License](#license)<br/>
[Contribution](#contribution)<br/>
[Testing](#testing)<br/>
[Questions](#questions)<br/>

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# License 
This application is covered under the ${generateLicenseNotice(data.license)} license.

# Contribution
${data.contribution}

# Testing
${data.testing}

# Questions
GitHub Username: [${data.github}](https://github.com/${data.github})<br/>
Email: <${data.email}>
`;
}

module.exports = generateReadMe;