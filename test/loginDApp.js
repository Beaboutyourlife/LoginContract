const LoginContract = artifacts.require("LoginContract");
const DAppLoginContract = artifacts.require("DAppLoginContract");

contract('LoginContract',() => {
    it('Deploy Login Contract', async () => {
        const instance = await LoginContract.deployed();
        const result = await(instance.Login("PASS"));
        //LoginContract.address
        console.log(LoginContract.address);
        assert(LoginContract.address !== '');
    });
});
//---------------------------------------------------------------------
contract('DAppLoginContract',() => {
    it('Deploy Login Contract', async () => {
        const instance = await DAppLoginContract.deployed();
        var register = await instance.Register("0x345cA3e014Aaf5dcA488057592ee47305D9B3e10");
        const login = await(instance.userLogin("0x345cA3e014Aaf5dcA488057592ee47305D9B3e10","PASS")); 
        const result = await(instance.CredToken("0x345cA3e014Aaf5dcA488057592ee47305D9B3e10","0xD2E8D80eeC760dA7DD35C7c21256e07f28d822D5")); 
        const test = await(instance.test("0x345cA3e014Aaf5dcA488057592ee47305D9B3e10","PASS")); 
        //LoginContract.address
        console.log(result);
        console.log(register);
        console.log(test);
        assert(instance.address !== '');
    });
});