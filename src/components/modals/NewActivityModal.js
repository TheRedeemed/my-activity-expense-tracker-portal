import React, { useState } from 'react';
import { Button, Header, Icon, Modal, Form, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const NewActivityButton = ({ ...props }) => {
    return (
        <Button {...props} style={{ display: 'flex', alignItems: 'center', color: '#00467d', padding: 10, border: '1px solid', borderRadius: 100, background: '#FFF' }}>
            <Icon name='add' data-testid='new-activity-icon' size='large' />
            <span style={{ fontSize: '18px', fontFamily: 'monospace', color: '#00467d', fontWeight: 'bold' }}>ADD NEW ACTIVITY</span>
        </Button>
    );
};

const NewActivityModal = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset, errors } = useForm();
    const { onAddActivityClick, activityRequestFlags } = props;
    const onSubmit = data => {
        onAddActivityClick(data);
        reset();
    };

    return (
        <Modal
            centered={false}
            open={open}
            trigger={<NewActivityButton />}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            closeOnDimmerClick={false}
            closeOnEscape={false}
            style={{ width: '37%' }}
        >
            <Header icon='bullseye' content='ADD A NEW ACTIVITY' style={{ color: '#00467d' }} />
            <div style={{ margin: 20 }}>
                {
                    activityRequestFlags.isSuccessful &&
                    <Message
                        success
                        header='Hooray!'
                        icon='smile outline'
                        content="Your new activity has been created sucessfully"
                    />
                }

                {
                    activityRequestFlags.hasError &&
                    <Message
                        error
                        header='Bummer!'
                        icon='frown outline'
                        content='An Error occured while adding a new activity. Please try again or contact support if the problem persists.'
                    />
                }
            </div>
            <div style={{ paddingTop: 20, paddingLeft: 50, paddingBottom: 20 }}>
                <Form onSubmit={handleSubmit(onSubmit)} loading={activityRequestFlags.isSubmitting}> {/* handleSubmit validates input before calling onSubmit */}
                    <Modal.Content>
                        <Form.Group widths='12'>
                            <Form.Field required width='9'>
                                <label>Title</label>
                                <input name='title' placeholder='Title' ref={register({ required: true })} /> {/* the register function is used to register the input into the hook */}
                                {
                                    errors.title &&
                                    <div class="ui pointing up prompt label">
                                        Title is required
                                    </div>
                                }
                            </Form.Field>
                            <Form.Field required width='3'>
                                <label>Fee</label>
                                <input name='fee' placeholder='Fee' type='number' ref={register({ min: 1, required: true })} />
                                {
                                    errors.fee &&
                                    <div class="ui pointing up prompt label" role="alert">
                                        Fee is required
                                    </div>
                                }
                            </Form.Field>
                        </Form.Group>
                        <Form.Field required width='12'>
                            <label>Description</label>
                            <textarea name='description' placeholder='Description' ref={register({ required: true })} />
                            {
                                errors.description &&
                                <div class="ui pointing up prompt label" role="alert">
                                    Description is required
                                </div>
                            }
                        </Form.Field>
                    </Modal.Content>
                    <Modal.Actions style={{ marginTop: 30 }}>
                        <Button color='grey' onClick={() => setOpen(false)}>
                            <Icon name='cancel' /> CANCEL
                        </Button>
                        <Button color='blue' disabled={errors.title || errors.fee || errors.description}>
                            <Icon name='checkmark' /> ADD
                        </Button>
                    </Modal.Actions>
                </Form>
            </div>
        </Modal>
    );
}

export default NewActivityModal;