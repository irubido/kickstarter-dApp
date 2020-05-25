import React, {useState} from 'react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import {Router} from '../../routes';

const CampaignNew = () => {
    const [minimumContribution, setMinimumContribution] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setErrorMessage('');
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaigns(minimumContribution).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err) {
            setErrorMessage(err.message);  
        }
        setLoading(false);
    };

    return (
        <Layout>
            <h3>Create a Campaign</h3>
            <Form onSubmit={handleSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input 
                        label='wei' 
                        labelPosition='right' 
                        // value={minimumContribution}
                        onChange={(e)=>setMinimumContribution(e.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops!" content={errorMessage}/>
                <Button loading={loading} primary>
                    Create
                </Button>
            </Form>
        </Layout>
    );
}

export default CampaignNew;