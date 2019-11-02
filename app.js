
const myConditions = ['bike', "driver's license"];

let myconditionsText = 'I have: ';
myConditions.forEach((cond,i) => {
    myconditionsText += cond;
    myconditionsText += i != myConditions.length - 1 ? ', ' : '.';
});
document.getElementById('myconditions').innerHTML = `<div style="margin-bottom: 5px;padding: 6px;background-color: #d3d3d3;">${myconditionsText}</div>`;


const companyA = new Company('Company A', [
    { 'requirements': ['apartment', 'house'], 'filter': 'or' },
    { 'requirements': ['property insurance'] },
], 'and');

const companyB = new Company('Company B', [
    { 'requirements': ['5 door car', '4 door car'], 'filter': 'or' },
    { 'requirements': ["driver's license"] },
    { 'requirements': ['car insurance'] }
], 'and');

const companyC = new Company('Company C', [
    { 'requirements': ['social security number'] },
    { 'requirements': ["work permit"] }
], 'and');

const companyD = new Company('Company D', [
    { 'requirements': ['apartment', 'house', 'flat'], 'filter': 'or' }
], 'and');

const companyE = new Company('Company E', [
    { 'requirements': ['2 door car', '3 door car', '4 door car', '5 door car'], 'filter': 'or' },
    { 'requirements': ["driver's license"] }
], 'and');

const companyF = new Company('Company F', [
    { 'requirements': ['scooter', 'bike'], 'filter': 'or' },
    { 'requirements': ['motorcyle', "driver's license", 'motorcycle insurance'], 'filter': 'and' }
], 'or');

const companyG = new Company('Company G', [
    { 'requirements': ['massage qualification certificate', 'liability insurance'], 'filter': 'and' },
], 'and');

const companyH = new Company('Company H', [
    { 'requirements': ['storage place', 'garage'], 'filter': 'or' },
], 'and');

const companyJ = new Company('Company J', [], '');

const companyK = new Company('Company K', [
    { 'requirements': ['Paypal account'], 'filter': 'and' },
], 'and');


function verifyCompanies(companies) {
    let companiesText = '';
    companies.forEach(company => {
        if (company.accomplishConditions(myConditions)) {
            companiesText += `<div style="padding-top: 4px;color: green;">I can work on ${company.name}</div>`;
        } else {
            companiesText += `<div style="padding-top: 4px;color: red;"> I can't work on ${company.name} </div>`;
        }
        companiesText += `<div style="padding-bottom: 4px;border-bottom: 1px solid #242424;"> ${company.requirementsToString()} </div>`;
    });
    document.getElementById('companies').innerHTML = companiesText;
};

let arrayCompanies = [companyA, companyB, companyC, companyD, companyE, companyF, companyG, companyH, companyJ, companyK];
verifyCompanies(arrayCompanies);

