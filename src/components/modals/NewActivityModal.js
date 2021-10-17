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
    const { onAddActivityClick, activityRequestFlags, removeRequestNotification, getActivityList } = props;
    const onSubmit = data => {
        onAddActivityClick(data);
        reset();
    };

    const onCloseOrCancelClick = () => {
        setOpen(false);
        getActivityList();
    };

    const isDisabled = (errors.title || errors.fee || errors.description) ? true : false;

    return (
        <Modal
            closeIcon
            centered={false}
            open={open}
            trigger={<NewActivityButton />}
            onClose={() => onCloseOrCancelClick()}
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
                        content="Your new activity has been created sucessfully. You can add another activity or close this window."
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
                                <input data-testid='titleInput' name='title' placeholder='Title' ref={register({ required: true })} onClick={() => removeRequestNotification()} /> {/* the register function is used to register the input into the hook */}
                                {
                                    errors.title &&
                                    <div className="ui pointing up prompt label">
                                        Title is required
                                    </div>
                                }
                            </Form.Field>
                            <Form.Field required width='3'>
                                <label>Fee</label>
                                <input data-testid='feeInput' name='fee' placeholder='Fee' type='number' ref={register({ min: 1, required: true })} />
                                {
                                    errors.fee &&
                                    <div className="ui pointing up prompt label" role="alert">
                                        Fee is required
                                    </div>
                                }
                            </Form.Field>
                        </Form.Group>
                        <Form.Field required width='12'>
                            <label>Description</label>
                            <textarea data-testid='descriptionInput' name='description' placeholder='Description' ref={register({ required: true })} />
                            {
                                errors.description &&
                                <div className="ui pointing up prompt label" role="alert">
                                    Description is required
                                </div>
                            }
                        </Form.Field>
                    </Modal.Content>
                    <Modal.Actions style={{ marginTop: 30 }}>
                        <Button color='grey' onClick={() => onCloseOrCancelClick()}>
                            <Icon name='cancel' /> CANCEL
                        </Button>
                        <Button color='blue' disabled={isDisabled}>
                            <Icon name='checkmark' /> ADD
                        </Button>
                    </Modal.Actions>
                </Form>
            </div>
        </Modal>
    );
}

export default NewActivityModal;