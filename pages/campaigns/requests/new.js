import React, {useState} from 'react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';
import {Message, Button, Form, Input} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';

const RequestNew= (
    {address}
    ) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [recipient, setRecipient] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(address);

        setLoading(true);
        setErrorMessage('');

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description, 
                web3.utils.toWei(value, 'ether'),
                recipient
                ).send({from: accounts[0]});

                Router.pushRoute(`/campaigns/${address}/requests`);
        } catch(err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
    };
    

    return (
        <Layout>
            <Link route={`/campaigns/${address}/requests`}>
                <a>
                    Back
                </a>
            </Link>
            <h3>Create a request</h3>
            <Form onSubmit={handleSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value in ether</label>
                    <Input 
                        onChange={e => setValue(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input 
                        onChange={e => setRecipient(e.target.value)}
                    />
                </Form.Field>
                <Message error header="Ooops!" content={errorMessage} />
                <Button loading={loading} primary>Create!</Button>
            </Form>
        </Layout>
    );
}

RequestNew.getInitialProps = async (props) => {
    const {address} = props.query

    return {
        address
    };
  }

export default RequestNew;