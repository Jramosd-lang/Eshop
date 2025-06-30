import os
from google.auth.transport.requests import Request
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

# Clave de API de Gmail
api_key = 'AIzaSyAusNOrI0hRZkjzKW9JQUSiyGFy5xXfqr0'

# Alcance de la API de Gmail
SCOPES = ['https://www.googleapis.com/auth/gmail.compose']

def create_gmail_service():
    # Crear credenciales utilizando la clave de API
    creds = Credentials.from_authorized_user_info(api_key, scopes=SCOPES)

    # Actualizar las credenciales si han caducado
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request

())

    # Crear una instancia del servicio de Gmail
    service = build('gmail', 'v1', credentials=creds)

    return service

def send_email(sender, to, subject, message):
    service = create_gmail_service()

    email_message = f"From: {sender}\nTo: {to}\nSubject: {subject}\n\n{message}"

    # enviar el correo electrónico utilizando la API de Google Gmail
    message = (service.users().messages().send(
        userId='me',
        body={'raw': base64.urlsafe_b64encode(email_message.encode()).decode()}
    ).execute())

    print("Correo electrónico enviado correctamente.")

# Ejemplo de uso
sender = 'jr10p9@gmail.com'
recipient = 'chessjr10p9@gmail.com'
subject = 'Hola desde la API de Gmail'
message = '¡Hola!\n\nEste correo electrónico fue enviado utilizando la API de Google Gmail.'

send_email(sender, recipient, subject, message)