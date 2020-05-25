import React, {useState} from 'react';
import web3 from '../ethereum/web3';
import {Form, Input, Button, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

const ContributeForm= ({address}) => {
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(address);
        setLoading(true);
        setError('');
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            });

            Router.replaceRoute(`/campaigns/${address}`)
        } catch (err) {
            setError(err.message)
        }
        setLoading(false);
        setValue('');
    }

    return (
       <Form onSubmit={handleSubmit} error={!!error}>
           <Form.Field>
               <label>Amount to contribute</label>
               <Input
                    label="ether"
                    labelPosition="right"
                    onChange={(e)=>setValue(e.target.value)}
               />
           </Form.Field>
           <Message error header="Oops!" content={error}/>
           <Button
           loading={loading}
            primary
           >Contribute!</Button>
       </Form>
    );
}

export default ContributeForm;