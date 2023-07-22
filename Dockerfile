FROM python:3.9-slim
WORKDIR /app
ADD . .
RUN pip --no-cache-dir install --upgrade pip && \
    pip --no-cache-dir install -r requirements.txt
ENTRYPOINT ["./entrypoint.sh"]
