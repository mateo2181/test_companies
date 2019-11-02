class Company {

    constructor(name, conditions,filter) {
        this.name = name;
        this.conditions = conditions;
        this.filter = filter;
        this.requirements = conditions.map(function (c, i) {
            return c.requirements;
        });
    }

    hasRequirements(requirementsCompany, filter, personConditions) {
        if (typeof filter === "undefined") filter = 'and';

        let difference = requirementsCompany.filter(x => !personConditions.includes(x));
        if (difference.length > 0 && difference.length < requirementsCompany.length && filter == 'or') return true;
        if (difference.length == 0) return true;
        return false;
    };

    accomplishConditions(personConditions) {
        let resultConditions = [];
        this.conditions.forEach((condition, i) => {
            resultConditions[i] = this.hasRequirements(condition.requirements, condition.filter, personConditions)
        });
        if(this.filter == 'or') 
            return resultConditions.filter(c => c).length > 0;
        
        return resultConditions.filter(c => !c).length == 0;
    };

    requirementsToString() {
        let requirementsString = '';
        this.conditions.forEach((c, i) => {
            c.requirements.forEach((r,j) => {
                requirementsString += ` ${r}`
                requirementsString += j != c.requirements.length - 1 ? ` ${c.filter} ` : '';
            });
            requirementsString +=  i != this.conditions.length - 1 ? ` <strong>${this.filter}</strong> ` : ''; 
        });
        return `${this.name} require: ${requirementsString != '' ? requirementsString : 'nothing'}`
    }
}