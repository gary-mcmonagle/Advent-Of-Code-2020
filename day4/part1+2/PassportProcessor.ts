interface IPassport {
    byr?: string
    iyr?: string
    eyr?: string
    hgt?: string
    hcl?: string
    ecl?: string
    pid?: string
    cid?: string
    [k: string]: string
}
export default class PassportProcessor {
    _processRawDocument(rawDocument) : IPassport  {
        const passport: IPassport = {};
        const fields: string[] = rawDocument.split(' ');
        fields.forEach(field => {
            const [key, value] = field.split(':');
            passport[key] = value;
        });
        return passport;
    }

    _validBirthYear(byr: string): boolean {
        if(!byr) return false;
        if(byr.length !== 4) return false;
        const n = Number(byr);
        if (n >= 1920 && n <= 2002) return true;
        return false;
    }
    _validIssYear(byr: string): boolean {
        if(!byr) return false;
        if(byr.length !== 4) return false;
        const n = Number(byr);
        if (n >= 2010 && n <= 2020) return true;
        return false;
    }
    _validExpYear(byr: string): boolean {
        if(!byr) return false;
        if(byr.length !== 4) return false;
        const n = Number(byr);
        if (n >= 2020 && n <= 2030) return true;
        return false;
    }
    _validHeight(h: string): boolean {
        if(!h) return false;
        const uom = h.slice(h.length -2, h.length);
        if(uom === 'cm' || uom === 'in') {
            const max = uom === 'cm' ? 193 : 76
            const min = uom === 'cm' ? 150 : 59
            const height = Number(h.slice(0, h.length-2))
            return height >= min && height <= max;
        }
        return false;
    }

    _validHairColour(c: string): boolean {
        return c && c.length === 7 && c.match(/#[0-9a-fA-F]+/).length > 0;
    }

    _validEyeColour(c: string): boolean {
        let valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
        return valid.includes(c);
    }

    _validPassportId(id: string): boolean {
        if(!id) return false;
        if(id.length !== 9) return false;

        if (Number(id)) return true;
        return false;
    }

    _isValidPassport(passport: IPassport) {
        return this._validBirthYear(passport.byr) &&
        this._validExpYear(passport.eyr) && 
        this._validIssYear(passport.iyr) && 
        this._validHairColour(passport.hcl) && 
        this._validHeight(passport.hgt) &&
        this._validEyeColour(passport.ecl) &&
        this._validPassportId(passport.pid);
    }
    isValid(rawDocument: string): boolean {
        return this._isValidPassport(this._processRawDocument(rawDocument));
    }
}